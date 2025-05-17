import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getLeases = async (req, res) => {
    try {
        const leases = await prisma.lease.findMany({
            include: {
                tenant: true,
                property: true,
            },
        });
        res.json(leases);
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ message: `Error retrieving leases: ` });
    }
};
export const getLeasePayments = async (req, res) => {
    try {
        const { id } = req.params;
        const payments = await prisma.payment.findMany({
            where: { leaseId: Number(id) },
        });
        res.json(payments);
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ message: `Error retrieving lease payments: ` });
    }
};

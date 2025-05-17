import jwt from "jsonwebtoken";
export const authMiddleware = (allowedRoles) => {
    return (req, res, next) => {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        try {
            const decoded = jwt.decode(token);
            const userRole = decoded["custom:role"] || "";
            req.user = {
                id: decoded.sub,
                role: userRole,
            };
            const hasAccess = allowedRoles.includes(userRole.toLowerCase());
            if (!hasAccess) {
                res.status(403).json({ message: "Access Denied" });
                return;
            }
        }
        catch (err) {
            console.error("Failed to decode token:", err);
            res.status(400).json({ message: "Invalid token" });
            return;
        }
        next();
    };
};

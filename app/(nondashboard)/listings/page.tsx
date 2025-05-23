"use client";

// Updated import paths
import Card from "../../components/Card";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import React from "react";

class Listings extends React.Component<{ property: never }> {
    render() {
        let isLoading;
        if (isLoading) return <Loading />;
        let error;
        if (error) return <div>Error loading favorites</div>;

        return (
            <div className="bg-gradient-to-b from-gray-50 to-gray-200 f-screen py-16 px-6">
            <div className="dashboard-container">
                <Header
                    title="Listings"
                    subtitle="Browse our current listings"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* Existing card */}
                    <Card
                        key="listing"
                        property={{
                            name: 'Bourbon Trail-King Bed-BBQ-Fire Pit-W&D-Office',
                            id: 1,
                            image: "/cardhouse1.jpeg",
                            beds: 3,
                            baths: 2,
                        }}
                        isFavorite={false}
                        onFavoriteToggle={() => {}}
                        showFavoriteButton={true}
                        propertyLink="/listings/listing1"
                        style={{
                            height: "400px",
                            borderRadius: "12px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                        externalLink="http://localhost:3001/listings/68253fbe535168b12906c197"
                    />

                    {/* New card 1 */}
                    <Card
                        key="listing2"
                       property={{
                           name: "Listing 2",
                           id: 2,
                           image: "/cardhouse2.jpeg",
                           beds: 4,
                           baths: 3,
                       }}
                       isFavorite={false}
                       onFavoriteToggle={() => {}}
                       showFavoriteButton={true}
                       propertyLink="/listings/listing2"
                       style={{
                           height: "400px",
                           borderRadius: "12px",
                           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                       }}
                    />

                    {/* New card 2 */}
                    <Card
                        key="listing3"
                        property={{
                            name: "Listing 3",
                            id: 3,
                            image: "/cardtwo/657a0674-f8c5-4799-9874-a74929015397.jpeg",
                            beds: 2,
                            baths: 1,
                        }}
                        isFavorite={false}
                        onFavoriteToggle={() => {}}
                        showFavoriteButton={true}
                        propertyLink="/listings/listing3"
                        style={{
                            height: "400px",
                            borderRadius: "12px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                </div>
            </div>
            </div>
        );
    }
}

export default Listings;

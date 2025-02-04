"use client";

import { useParams } from "next/navigation";
import bookingsData from "@/public/data/response_bookings.json";
import { useState, useEffect } from "react";
import BookingDetails from "@/components/BookingDetailsItem/BookingDetails";

export default function Page() {
    const { slug } = useParams();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const filteredBookings = bookingsData.data.filter(
            (booking) => booking.product_id === slug
        );
        setBookings(filteredBookings);
    }, [slug]);

    return (
        <div className="p-6 container mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">
                📚 Rezerwacje dla oferty {slug}
            </h1>
            {bookings.map((booking) => (
                <BookingDetails key={booking.id} booking={booking} />
            ))}
        </div>
    );
}

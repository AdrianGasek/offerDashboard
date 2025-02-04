interface Participant {
  full_name: string;
  birth_date: string;
  city: string;
  street: string;
  house_number: string;
  postcode: string;
  province: string;
}

interface ProductData {
  id: string;
  name: string;
  type: string;
}

interface TripData {
  start_date: string;
  end_date: string;
  name: string;
}

interface Booking {
  id: string;
  status: string;
  status_label: string;
  type_label: string;
  created_at: string;
  total_price: number;
  payable_price: number;
  participants: Participant[];
  product_data: ProductData;
  trip_data?: TripData;
}

export default function BookingDetails({ booking }: { booking: Booking }) {
  const formatDate = (date: string) => new Date(date).toLocaleDateString('pl-PL');
  
  return (
    <div className="border p-6 rounded-lg shadow-lg mb-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">🎫 Informacje o rezerwacji</h3>
          <div className="space-y-2">
            <p><span className="font-medium">🆔 ID:</span> {booking.id}</p>
            <p><span className="font-medium">📅 Data utworzenia:</span> {formatDate(booking.created_at)}</p>
            <p><span className="font-medium">📊 Status:</span> {booking.status_label}</p>
            <p><span className="font-medium">🏷️ Typ:</span> {booking.type_label}</p>
            <p><span className="font-medium">💰 Cena całkowita:</span> {booking.total_price} PLN</p>
            <p><span className="font-medium">💳 Do zapłaty:</span> {booking.payable_price} PLN</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">🎯 Informacje o produkcie</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Nazwa:</span> {booking.product_data.name}</p>
              <p><span className="font-medium">Typ:</span> {booking.product_data.type}</p>
            </div>
          </div>

          {booking.trip_data && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">🗓️ Informacje o wycieczce</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Nazwa:</span> {booking.trip_data.name}</p>
                <p><span className="font-medium">Data rozpoczęcia:</span> {formatDate(booking.trip_data.start_date)}</p>
                <p><span className="font-medium">Data zakończenia:</span> {formatDate(booking.trip_data.end_date)}</p>
              </div>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">👥 Uczestnicy</h3>
          {booking.participants.map((participant, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded">
              <p><span className="font-medium">👤 Imię i nazwisko:</span> {participant.full_name}</p>
              <p><span className="font-medium">🎂 Data urodzenia:</span> {participant.birth_date}</p>
              <div className="mt-2">
                <h4 className="font-medium">📍 Adres:</h4>
                <p>{participant.street} {participant.house_number}</p>
                <p>{participant.postcode} {participant.city}</p>
                <p>{participant.province}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
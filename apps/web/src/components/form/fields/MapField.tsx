interface MapFieldProps {
  value?: { lat: number; lng: number };
  onChange: (value: { lat: number; lng: number }) => void;
}

export function MapField({ value, onChange }: MapFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input type="number" value={value?.lat || ''} onChange={e => onChange({ ...value!, lat: +e.target.value })} placeholder="Lat" className="w-full border rounded px-3 py-2" step="any" />
        <input type="number" value={value?.lng || ''} onChange={e => onChange({ ...value!, lng: +e.target.value })} placeholder="Lng" className="w-full border rounded px-3 py-2" step="any" />
      </div>
      <div className="h-40 bg-gray-100 rounded border flex items-center justify-center text-sm text-gray-500">
        Map (Leaflet) - {value?.lat && value?.lng ? `${value.lat}, ${value.lng}` : 'Click to set location'}
      </div>
    </div>
  );
}

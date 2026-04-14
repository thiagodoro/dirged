import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const MapaSection = () => {
  const [mapReady, setMapReady] = useState(false);

  const locations = [
    { id: 1, lat: -19.9409, lng: -43.9369, color: "#FF007F", units: "DIRGED, ASGID, GEJUR, GEDAN, GEDOC, COJUR, COGEDE", address: "R. Raul Pompeia, 101 - São Pedro" },
    { id: 2, lat: -19.9259192, lng: -43.9354585, color: "#FFE600", units: "COBIB, COMEX", address: "R. Goiás, 229 - Centro" },
    { id: 3, lat: -19.9140383, lng: -43.9365185, color: "#9D00FF", units: "COARQ, COMEX", address: "Av. do Contorno, 629 - Centro" },
    { id: 4, lat: -19.9445719, lng: -43.9222717, color: "#00D4FF", units: "COBIB, COMEX", address: "Av. Afonso Pena, 4001 - Serra" },
    { id: 5, lat: -19.9117456, lng: -44.0462546, color: "#FF6B35", units: "CORCEN, CORAV, COARPE", address: "Av. Ápio Cardoso, 577 - Cincão - Contagem" },
    { id: 6, lat: -19.9256585, lng: -43.9349312, color: "#10B981", units: "COMEX", address: "Av. Afonso Pena, 1500 - Centro" },
    { id: 7, lat: -19.9397822, lng: -43.9267442, color: "#3B82F6", units: "COMEX", address: "Praça Milton Campos, 16 - Cruzeiro" },
    { id: 8, lat: -19.9768, lng: -44.0155, color: "#F472B6", units: "CORCEN", address: "R. Flávio Marques Lisboa, 464 - Barreiro de Baixo" },
  ];

  useEffect(() => {
    setMapReady(true);
  }, []);

  return (
    <section id="mapa" data-testid="mapa-section" className="py-24 md:py-32 px-6 md:px-12 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-[#FF007F]/20 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-[#FF007F]" />
            </div>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Onde <span className="text-gradient-pink">Estamos</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            A DIRGED ocupa <strong className="text-white">8 endereços</strong> em Belo Horizonte e Região Metropolitana.
          </p>
        </motion.div>

        {/* Leaflet Map */}
        <motion.div
          className="rounded-2xl overflow-hidden border border-white/10 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ height: '480px' }}
          data-testid="mapa-leaflet"
        >
          {mapReady && (
            <MapContainer center={[-19.928, -43.980]} zoom={12} style={{ height: '100%', width: '100%' }} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
              />
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png"
              />
              {locations.map((loc) => (
                <Marker
                  key={loc.id}
                  position={[loc.lat, loc.lng]}
                  icon={L.divIcon({
                    className: '',
                    html: `<div style="background:${loc.color};width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:13px;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.4);">${loc.id}</div>`,
                    iconSize: [28, 28],
                    iconAnchor: [14, 14],
                  })}
                >
                  <Popup>
                    <div style={{ minWidth: '180px' }}>
                      <strong style={{ fontSize: '13px' }}>{loc.units}</strong>
                      <br />
                      <span style={{ fontSize: '11px', color: '#666' }}>{loc.address}</span>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </motion.div>

        {/* Legenda */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {locations.map((loc) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: loc.id * 0.05 }}
              className="flex items-start gap-3 p-3 rounded-xl bg-black/30 border border-white/5"
              data-testid={`location-${loc.id}`}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ backgroundColor: loc.color }}>
                {loc.id}
              </div>
              <div>
                <p className="text-white text-xs font-semibold leading-tight">{loc.units}</p>
                <p className="text-white/40 text-xs mt-1">{loc.address}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapaSection;

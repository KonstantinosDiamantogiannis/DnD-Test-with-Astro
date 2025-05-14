import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import undeadList from '../data/undead.js';

export default function UndeadCarousel() {
  return (

<div className="max-w-[800px] mx-auto">
    <Splide options={{ type: 'loop', perPage: 1, autoplay: true }}>
  {undeadList.map((undead, idx) => (
    <SplideSlide key={idx}>
      <div className="bg-gray-900 text-white p-4 rounded-lg max-w-screen-sm mx-auto">
        <div className="flex justify-center">
          <img src={undead.image} alt={undead.name} className="undead-img" />
        </div>
        <h2 className="text-[30px] font-bold mt-2">{undead.name}</h2>
        <p><strong>Hit Dice:</strong> {undead.hitDice}</p>
        <p><strong>HP:</strong> {undead.hp}</p>
        <p><strong>Saves:</strong> {undead.saves}</p>
        <p><strong>AC:</strong> {undead.ac}</p>
        <p><strong>Size and Movement:</strong> {undead.size}</p>
        <p><strong>Attacks:</strong> {undead.attacks}</p>
        <p><strong>Special:</strong> {undead.special}</p>
        <p><strong>Ranged:</strong> {undead.ranged}</p>
        <p><strong>Defenses:</strong> {undead.defenses}</p>
        <p><strong>Stats:</strong> {undead.stats}</p>
        <p><strong>Feats:</strong> {undead.feats}</p>
        <p><strong>Gear:</strong> {undead.gear}</p>
      </div>
    </SplideSlide>
  ))}
</Splide>
</div>
//     <Splide options={{ type: 'loop', perPage: 1, autoplay: true }}>
//       {undeadList.map((undead, idx) => (
//         <SplideSlide key={idx}>
//           <div style={{ background: '#222', color: '#fff', padding: '1rem', borderRadius: '0.5rem' }}>
//             <img src={undead.image} alt={undead.name} className="undead-img" />
//                         {/* style={{ width: '100%', borderRadius: '0.5rem' }}  */}
//             <h2>{undead.name}</h2>
//                     <p><strong>Hit Dice:</strong> {undead.hitDice}</p>
//                     <p><strong>HP:</strong> {undead.hp}</p>
//                     <p><strong>AC:</strong> {undead.ac}</p>
//                     <p><strong>Attacks:</strong> {undead.attacks}</p>
//                     <p><strong>Special:</strong> {undead.special}</p>
//                     <p><strong>Ranged:</strong> {undead.ranged}</p>
//                     <p><strong>Defenses:</strong> {undead.defenses}</p>
//                     <p><strong>Stats:</strong> {undead.stats}</p>
//                     <p><strong>Feats:</strong> {undead.feats}</p>
//                     <p><strong>Gear:</strong> {undead.gear}</p>
//           </div>
//         </SplideSlide>
//       ))}
//     </Splide>


  );
}

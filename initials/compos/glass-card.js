// class GlassCard extends HTMLElement {
//     connectedCallback() {
//         this.attachShadow({ mode: 'open' });
//         this.shadowRoot.innerHTML = `
//             <style>
//                 :host {
//                     display: block;
//                     background: rgba(255, 255, 255, 0.2);
//                     border-radius: 1.5rem;
//                     backdrop-filter: blur(10px);
//                     border: 1px solid rgba(255, 255, 255, 0.2);
//                     box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
//                     overflow: hidden;
//                     transition: all 0.3s ease;
//                 }
                
//                 :host(:hover) {
//                     transform: translateY(-5px);
//                     box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.15);
//                 }
                
//                 ::slotted(*) {
//                     padding: 1.5rem;
//                 }
//             </style>
//             <slot></slot>
//         `;
//     }
// }

// customElements.define('glass-card', GlassCard);
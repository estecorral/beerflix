
const toggle = elemento => (removeClass, addClass) => {
        elemento.classList.remove(removeClass);
        elemento.classList.add(addClass);
};

export default toggle;
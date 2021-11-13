import './style.css';
function Btn({ name, bold }) {
    return (
        <input type='button' value={name} style={{ fontWeight: bold }} />
    )
}

export default Btn
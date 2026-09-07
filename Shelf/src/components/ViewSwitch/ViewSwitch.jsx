
const ViewSwitch = ({ page, setPage }) => {
    return (
        <div className="app-header">
            <div className="brand">
                <div className="brand-mark">S</div>
                <div className="brand-name">Shelf</div>
            </div>
            <div className="view-switch">
                <button 
                    className={`view-btn${page === 'shelf' ? " active" : ""}`} 
                    onClick={() => {
                        setPage('shelf');
                    }} 
                    data-screen="shelf">
                    Моя полка
                </button>
                <button 
                    className={`view-btn${page === 'stat' ? " active" : ""}`} 
                    onClick={() => {
                        setPage('stat');
                        console.log(page)
                    }} 
                    data-screen="stats">
                    Статистика
                </button>
            </div>
        </div>
    )
}


export default ViewSwitch
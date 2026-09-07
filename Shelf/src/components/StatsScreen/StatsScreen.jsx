const StatsScreen = () => {
    return (
        <section className="screen active" id="screen-stats">
            <p className="greeting">Статистика</p>
            <p className="greeting-sub">Как продвигается чтение</p>
            <div className="stats-row" id="statsRow" />
            <div className="session-card">
                <p className="session-title">Страниц прочитано сегодня</p>
                <p className="session-sub">
                Обновляйте счётчик после каждой сессии чтения
                </p>
                <div className="counter-row">
                <button className="counter-btn" id="decBtn">
                    −
                </button>
                <span className="counter-value" id="counterValue">
                    0
                </span>
                <button className="counter-btn" id="incBtn">
                    +
                </button>
                </div>
                <button className="btn ghost counter-reset" id="resetBtn">
                Сбросить счётчик
                </button>
            </div>
        </section>
    )
}

export default StatsScreen
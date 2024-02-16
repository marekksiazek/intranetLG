import '../componentsCSS/linkMenu.css';

function LinkMenu(){

    const linksTitle = ["LGEMA History", "Approval Guidline", "Car Booking System", "DRS", "VMS", "LGEMA SSO", "PMS", "Workers Allocation Board", "GMES Foolproof", "GMES Analyzer", "Order Management", "IVI NCR", "Idea System", "Meal Management", "Human Resources", "Security", "EESH Board", "UPPH Management", "Companies Policies", "Sticky Notes"];

    return (
        <nav className="linkMenu">
            <ul className="list">
                {linksTitle.map (item => (
                    <li key={item}><a href="https://google.com" className="link">{item}</a></li>
                ))}
            </ul>
        </nav>
    );
}

export default LinkMenu;
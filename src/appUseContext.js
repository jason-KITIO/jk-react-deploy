import ParentContainer from "./parentContainer";
import { userContext } from "./userContext";

function AppUseContext() {
    const user = { name: 'john', age: 30 };

    return (
        <userContext.Provider value={user}>
            <div>
                <p>App container</p>
                <ParentContainer />
            </div>
        </userContext.Provider>
    )
}

export default AppUseContext
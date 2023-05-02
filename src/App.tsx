import React from 'react';
import { Provider } from 'react-redux';
import store from "./redux/store";
import DishForm from "./components/Form";

const App: React.FC = () => {
    return (
        <div className="flex flex-col justify-center align-middle border-2 w-full shadow-2xl max-w-lg mx-auto my-24 mb-68 text-center p-4 rounded bg-white">
            <Provider store={store}>
                <DishForm />
            </Provider>
        </div>
    );
}

export default App;

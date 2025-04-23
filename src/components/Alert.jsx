
import { useEffect, useState } from "react";
import { useAlert } from "../contexts/AlertContext";


function Alert() {
    const { alert } = useAlert();

    //creo una variabile di stato per gestire il comportamento dell'alert
    const [showAlert, setShowAlert] = useState(true);

    //creo una funzione per far sparire l'alert dopo 5s
    function showAlertFn() {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 5000);

        //creo una funzione per ripulire il timer
        function clearTimer() {
            return clearTimeout(timer);
        }
        return clearTimer;
    }

    //uso useEffect per far comparire l'alert quando il componente viene montato
    useEffect(showAlertFn, []);

    return <>
        {showAlert && alert.message && (<p><strong>{alert.type}:</strong> {alert.message}</p>)}
    </>
}

export default Alert;
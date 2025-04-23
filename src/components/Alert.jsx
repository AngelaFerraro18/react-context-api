
import { useAlert } from "../contexts/AlertContext";


function Alert() {
    const { alert } = useAlert();

    return <>
        {alert.message && <p><strong>{alert.type}:</strong> {alert.message}</p>}
    </>
}

export default Alert;
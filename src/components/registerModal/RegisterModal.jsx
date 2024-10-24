import './RegisterModal.css';

export default function RegisterModal({registerOption}) {
    return (
        <dialog className="register-modal">
            <h2>{registerOption ? "Register" : "Login"}</h2>
            <p>Hier komt de form!!</p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}
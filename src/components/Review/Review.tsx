import { ReactComponent as Star } from "./star.svg"
import "./Review.css"
type Props = {
    mail: string
}
export default function Review({ mail }: Props) {
    return (
        <>
            <div className="row Review">
                <div className="col-3">
                    <div className="IconProfile">
                        <h3>V</h3>
                    </div>
                </div>
                <div className="col-9 d-flex flex-column align-items-start gap-2">
                    <h4>Valeria Bassani</h4>
                    <div className="Stars">
                        <Star fill="#880D1E" />
                        <Star fill="#880D1E" />
                        <Star fill="#880D1E" />
                        <Star fill="#880D1E" />
                        <Star />
                    </div>
                    <div className="Message">
                        <p>recensione aaaahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
                    </div>
                    <p>10/11/2022</p>
                </div>
            </div>
        </>
    )
}
import { Button, Card } from "flowbite-react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext } from "react";
import { UserContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const TabsCard = ({ toy }) => {
    const { _id, img, name, price, rating } = toy;
    const { user } = useContext(UserContext);

    const handleDetails = id => {
        console.log(id);
        if (!user) {
            Swal.fire({
                title: 'Warning!',
                text: 'You have to log in first to view details',
                icon: 'warning',
                confirmButtonText: 'Ok'
            })
        }
    }
    return (
        <div>
            <div className="max-w-sm">
                <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={img}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p>Price: ${price}</p>
                    <Rating style={{ maxWidth: 140 }} value={parseInt(rating)} />
                    <Link to="/details" className="w-full">
                        <Button
                            onClick={() => handleDetails(_id)}
                            gradientDuoTone="purpleToPink"
                        >
                            View Details
                        </Button>
                    </Link>
                </Card>
            </div>
        </div>
    );
};

export default TabsCard;
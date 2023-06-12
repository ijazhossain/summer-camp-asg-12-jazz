const SinglePopularInstructor = ({ item }) => {
    const { image, name, email, address } = item;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <p>{address}</p>

            </div>
        </div>
    );
};

export default SinglePopularInstructor;
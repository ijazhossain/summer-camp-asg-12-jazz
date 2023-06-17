const SinglePopularInstructor = ({ item }) => {
    const { image, name, email } = item;
    return (
        <div className="card bg-base-100">
            <figure className="px-10 pt-10">
                <img src={image} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-[#b38b37]">{email}</p>
            </div>
        </div>
    );
};

export default SinglePopularInstructor;
import HomeSectionTitle from "../../../components/HomeSectionTitle/HomeSectionTitle";

const Question = () => {
    return (
        <div className="container w-[80%] mx-auto my-12 lg:my-24 ">
            <HomeSectionTitle subTitle="FAQS" title="Frequently Asked Questions
"></HomeSectionTitle>
            <div className="lg:flex items-center justify-between gap-8 mt-14">
                <div className="w-full">
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item ">
                            <input type="radio" name="my-accordion-4" checked="checked" />
                            <div className=" collapse-title text-2xl font-bold">
                                Can I use it for my clients?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, you can use "Musicine" as a name for your client's music school or related services, provided that it is not already in use by another entity. However, it's always recommended to conduct a thorough search to ensure the name is available and doesn't infringe on any existing trademarks or copyrights. Additionally, consider consulting with legal professionals for guidance regarding naming and branding for your client.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item ">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-bold">
                                Is there a money back guarantee?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, we offer a 30-day money back guarantee for our courses. If you are not satisfied with your experience within the first 30 days, simply contact our customer support team, and we will gladly process a refund for you. Your satisfaction is our top priority.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item ">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-bold">
                                Do I get free updates?
                            </div>
                            <div className="collapse-content">
                                <p> Yes, absolutely! We are committed to providing continuous improvements and updates to enhance your experience on the Musicine website. As a valued member, you will receive free updates, ensuring that you have access to the latest features, content, and enhancements. Stay tuned for exciting updates and new offerings as we strive to deliver the best possible experience for our users.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item ">
                            <input type="radio" name="my-accordion-4" checked="checked" />
                            <div className=" collapse-title text-2xl font-bold">
                                Can I use it for my clients?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, you can use "Musicine" as a name for your client's music school or related services, provided that it is not already in use by another entity. However, it's always recommended to conduct a thorough search to ensure the name is available and doesn't infringe on any existing trademarks or copyrights. Additionally, consider consulting with legal professionals for guidance regarding naming and branding for your client.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item ">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-bold">
                                Is there a money back guarantee?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, we offer a 30-day money back guarantee for our courses. If you are not satisfied with your experience within the first 30 days, simply contact our customer support team, and we will gladly process a refund for you. Your satisfaction is our top priority.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item ">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-bold">
                                Do I get free updates?
                            </div>
                            <div className="collapse-content">
                                <p> Yes, absolutely! We are committed to providing continuous improvements and updates to enhance your experience on the Musicine website. As a valued member, you will receive free updates, ensuring that you have access to the latest features, content, and enhancements. Stay tuned for exciting updates and new offerings as we strive to deliver the best possible experience for our users.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Question;
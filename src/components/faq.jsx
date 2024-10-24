import React from 'react'


const faqs = [
    {
        "title": "Which areas does Delivo deliver to?",
        "content": "Delivo delivers to specific postal codes: 400613 and 400612. Please ensure your delivery address falls within these service areas."
    },
    {
        "title": "How much does delivery cost?",
        "content": "Delivery fees may vary. The exact fee will be displayed at checkout based on your location and order details."
    },
    {

        "title": "What is the expected delivery time for orders?",
        "content": "The maximum delivery time is 45 minutes. We aim to deliver all orders within this timeframe for a fast and efficient experience."
    },
    {
        "title": "Am I eligible for a refund if I receive a damaged or incorrect item?",
        "content": "Yes, refunds are available for incorrect or damaged items. You must contact our support team within 3 working days of delivery to be eligible for a refund."
    },
    {
        "title": "What should I do if I have a issue or need support?",
        "content": "You can reach our support team by email at info@kodeinnovate.in or by phone at +91 9326500602. We are here to help with any delivery issues or inquiries you may have."
    },
    {
        "title": "Can I cancel my order after placing it?",
        "content": "No, once an order is placed on the Delivo app, it cannot be canceled. This policy ensures a smooth and efficient delivery process. In exceptional cases, such as unavoidable circumstances, please contact our customer service team at +91 9326500602 immediately. Requests will be reviewed on a case-by-case basis."
    },
]

const Faq = () => {
    return (
        <div className="accordion-group accordion-group-bordered">

            {
                faqs.map((faq, index) => (
                    <div key={index} className="accordion">
                        <input type="checkbox" id={index} className="accordion-toggle" />
                        <label htmlFor={index} className="accordion-title text-sm lg:text-xl">{faq.title}</label>
                        <span className="accordion-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                        </span>
                        <div className="accordion-content">
                            <div className="min-h-0">{faq.content}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Faq
import { useState, useEffect } from "react";

const Homepage = () => {
    const [showcaseEntryIds, setShowcaseEntryIds] = useState([]);

    useEffect(() => {
        const fetchShowcaseEntryIds = async () => {
            let response;

            try {
                response = await fetch(
                    "https://www.bigcommerce.com/actions/bcCore/interview/getShowcaseEntryIds"
                );
                const data = response.json();
                console.log(data);
                setShowcaseEntryIds(data);
            } catch (error) {}
        };

        fetchShowcaseEntryIds();
    });

    return <div>index</div>;
};

export default Homepage;

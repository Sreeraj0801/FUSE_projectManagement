import moment from 'moment';
import { useState, useEffect } from 'react';

const useTimeAgo = (timestamp) => {
    const [timeAgo, setTimeAgo] = useState('');

    useEffect(() => {
        const time = moment(timestamp).fromNow();
        setTimeAgo(time);
    }, [timestamp]);

    return timeAgo;
};

export default useTimeAgo;

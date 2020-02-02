const season = (state = 'summer', { type, payload }) => {
    switch(type) {
        case 'CHANGE_SEASON':
            return payload;
        default:
            return state;
    }
}

export default season;
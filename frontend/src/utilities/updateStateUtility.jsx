const updateStateUtility = async (serviceid,state, token) => {
    const res = await fetch(`http://localhost:8080/services/${serviceid} ${state}`, {
        method: 'update',
        headers: {
            Authorization: token,
        },
    });

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }
};

export default updateStateUtility;

// utility function that made code leaner and more readable
const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
}

export default updateObject
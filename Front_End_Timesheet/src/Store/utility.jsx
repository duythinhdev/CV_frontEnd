export const updateobject = (oldobject,updatedProperties) =>{
    return {
        ...oldobject,
        ...updatedProperties
    }
}

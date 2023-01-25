import Joi from "joi";
const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-ЯіїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Тільки букви від одного до 20 символів'
    }),
    email: Joi.string().regex(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/).required().messages(
        {'string.pattern.base': 'Не коректний email'}
    )
})

export {userValidator}
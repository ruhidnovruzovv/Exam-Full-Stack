import * as Yup from 'yup'

export const productSchema = Yup.object().shape({
    name: Yup.string().required(),
    image: Yup.string().required(),
    price: Yup.number().required(),
    description: Yup.string().required(),
})


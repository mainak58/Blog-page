import {z} from 'zod'

export const formSchema = z.object({
    title: z.string().min(3).max(100),
    description: z.string().min(3).max(100),
    catagory: z.string().min(3).max(100),
    link: z.string().url().refine(async (url) => {
        try {
            const res = await fetch(url, {method: 'HEAD'});
            const constType = res.headers.get('content-type');
            if(constType?.startsWith("image/")) {
                return true
            }else{
                return false
            }
        } catch (error) {
            console.log(error)
        }
    }),
    pitch: z.string().min(3).max(100),
})
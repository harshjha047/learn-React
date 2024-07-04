import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import appConfig from '../Appwright/AppConfig'
import { useSelector } from "react-redux";
import {Input,Select,RTE} from './index'

export default function PostForm({post}) {
    const {register,handleSubmit,watch,setValue,getValues,control} = useForm({
        defaultValues:{
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "",
        }
    })
    const navigate = useNavigate()
    const userData = useSelector(state.user.userData)
    const submit = async ({data}) =>  {
        if(post){
        const file = data.image[0] ? appConfig.uploadFile(data.image[0]):null
            if(file){
                appConfig.deleteFile(post.featuredImage)
            }
            const displayPost = await appConfig.updatePost(post.$id,{
                ...data,
                featuredImage:file ? file.$id : undefined,
            })
            if(displayPost){
                navigate(`/post/${displayPost.$id}`)
            }else{
                await appConfig.uploadFile(data.image[0])
                if(file){
                    const fileId = file.$id
                    data.featuredImage=fileId
                    const displayPost = await appConfig.createPost({
                        ...data,
                        userId:userData.$id,
                    })
                    if(displayPost){
                        navigate(`/post/${displayPost.$id}`)
                    }

                }
            }
        }
    }
    const slugTransfrom = useCallback((value)=> {
        if (value && typeof value === 'string'){
            return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-z\d\s]+/g,'-')
            .replace(/\s/g, '-');
            
            return '';
            
        }
    },[])
    React.useEffect(()=>{
        const subscription = watch((value,{name})=>{
            if(name==='title'){
                setValue('slug',slugTransfrom(value.title,{shouldValidate:true}));
            }
        })
    },[slugTransfrom,setValue,watch]) 
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </button>
            </div>
        </form>
  )
}

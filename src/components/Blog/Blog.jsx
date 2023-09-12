import PropTypes from 'prop-types';
import { FaBookmark  } from 'react-icons/fa';


const Blog = ({ blog,handleAddToBookmark,handleMarksAsRead }) => {
    const{title, cover, author_img, reading_time, author,posted_date, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8 sm:w-[570px] md:w-[600px]' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between mb-4  w-[800px] sm:w-[640px] md:w-[600px]'>
                <div className='flex '>
                <img className='w-10 rounded-full' src={author_img} alt='' />
                <div className='ml-6'>
                    <h3 className="text-2xl">{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                    onClick={() => handleAddToBookmark(blog)}
                    className='ml-2 text-2xl text-red-200'
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className="text-4xl">{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button
            onClick={()=>handleMarksAsRead(reading_time)}
            className='text-purple-600 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarksAsRead: PropTypes.func
}

export default Blog;
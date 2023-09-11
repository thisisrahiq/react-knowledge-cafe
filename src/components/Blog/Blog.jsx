import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const{title, cover, author_img, reading_time, author,posted_date, hashtags } = blog;
    return (
        <div>
            <img src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                <img className='w-10 rounded-full' src={author_img} alt='' />
                <div className='ml-6'>
                    <h3 className="text-2xl">{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h1 className="text-4xl">{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;
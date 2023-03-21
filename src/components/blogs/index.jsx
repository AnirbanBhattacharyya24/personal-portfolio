import React from 'react'
import './style.scss';
import Section from '../shared/Section';
import BlogCard from './blog-card';
import Blog1 from '../../images/blogs/haikyuu.png';
import Blog2 from '../../images/blogs/demonSlayer.png';
import Blog3 from '../../images/blogs/naruto.png';

const Blogs = () => {
  return (
    <Section id="blogs" title ="Blogs & Articles" background="dark">
        <div className="blogs-content-wrappper">
            <BlogCard user="Rohan" date="02/21" image = {Blog1} title="Haikyuu" description="Determined to be like the volleyball championship's star player nicknamed 'the small giant', Shoyo joins his school's volleyball club."/>
            <BlogCard user="John" date="03/19" image = {Blog2} title="Demon Slayer" description="A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister."/>
            <BlogCard user="Mark" date="24/99" image = {Blog3} title="Naruto" description="Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja."/>
        </div>
    </Section>
  )
}

export default Blogs
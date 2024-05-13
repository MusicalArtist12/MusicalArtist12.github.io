import PhotoSlideshow from '@/components/PhotoSlideshow'
import Article from '@/components/Article'
import '@/styles/about-me.css'
import { getPhotos } from '@/components/Fetchers'

export default async function About_Me() { 
    const Photos = await getPhotos();

    return <>  
        <section className='grid'>
            <PhotoSlideshow Photos={Photos} className="photo"/>

            <article>
                <h1>Hi! I&apos;m Julia</h1>
                <h2>I use She/Her pronouns</h2>
                <Article>
                    <p> 
                        I&apos;m a sophomore at the <a href="https://www.uidaho.edu/">University of Idaho</a>, pursuing a bachelors degree in computer science with a minor in music.
                        I&apos;m interested in low-level programming, Robotics, and 3D graphics (most recently OpenGL).
                        Though as i&apos;m writing this, web development might find a home in that list. 
                        I like to learn new skills and concepts to develop clever solutions to solve difficult problems. 
                    </p>
                    <p>
                        I have a love for playing Trumpet and making music, mostly in contemporary and jazz settings. 
                        I also love talking about and analyzing music used in movies, musicals, and video games. 
                        Music and I have a storied history; its an integral part of my identity.
                    </p>
                    <p>
                        A long term goal of mine is to be able to express both of my interests together, combining music with computer science.
                        Some of my other smaller interests include Drawing/Watercolor painting and graphic design.
                    </p>
                    <p>
                        I&apos;m a trans girl, and i&apos;m still learning who I am. I chose the domain <a href="https://juliaviolet.dev">JuliaViolet.dev</a> since it&apos;s
                        a concatenation of my first and middle name.
                    </p>
                </Article>
            </article>
        </section>
    </>
}
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <article className={styles.card}>
            <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.image}
            />
            <div className={styles.overlay}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.title}>{project.title}</h3>
            </div>
            <Link href={`/projects/${project.slug}`} className={styles.link}>
                {/* <span className="sr-only">View Project {project.title}</span> */}
            </Link>
        </article>
    );
};

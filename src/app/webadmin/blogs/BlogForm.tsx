"use client";

import React, { useState } from 'react';
import { saveBlog } from "../actions";

export const BlogForm = ({ initialData }: { initialData?: any }) => {
    const [isUploading, setIsUploading] = useState(false);
    const [imagePath, setImagePath] = useState(initialData?.image || '');

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        setIsUploading(true);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/upload", { method: "POST", body: formData });
            const data = await res.json();
            if (data.success) {
                setImagePath(data.url);
            } else {
                alert("Upload failed.");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <form action={saveBlog} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', background: 'white', padding: '30px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            {initialData?.id && <input type="hidden" name="id" value={initialData.id} />}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ fontWeight: '500' }}>Post Title</label>
                <input type="text" name="title" defaultValue={initialData?.title} required style={{ padding: '12px', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '16px' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ fontWeight: '500' }}>URL Slug</label>
                <input type="text" name="slug" defaultValue={initialData?.slug} required style={{ padding: '12px', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '16px' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontWeight: '500' }}>Category</label>
                    <input type="text" name="category" defaultValue={initialData?.category || "Technology"} required style={{ padding: '12px', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '16px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontWeight: '500' }}>Author Name</label>
                    <input type="text" name="author" defaultValue={initialData?.author || "System Admin"} required style={{ padding: '12px', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '16px' }} />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ fontWeight: '500' }}>Feature Image</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} disabled={isUploading} style={{ marginBottom: '10px' }} />
                <input type="hidden" name="image" value={imagePath} />
                {imagePath && <span style={{ color: 'var(--primary)', fontSize: '14px' }}>Current Image: {imagePath}</span>}
                {isUploading && <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Uploading...</span>}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ fontWeight: '500' }}>Article Content (Supports markdown/HTML strings depending on frontend logic)</label>
                <textarea name="content" defaultValue={initialData?.content} required rows={15} style={{ padding: '12px', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '16px', fontFamily: 'monospace' }}></textarea>
            </div>

            <button type="submit" style={{ padding: '14px', background: 'var(--primary)', color: 'white', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>
                {initialData ? "Update Article" : "Publish Article"}
            </button>
        </form>
    );
}

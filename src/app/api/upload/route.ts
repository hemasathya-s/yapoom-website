import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
    try {
        const data = await request.formData();
        const file: File | null = data.get('file') as unknown as File;

        if (!file) {
            return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Standardize file name format (lowercase, replace spaces with hyphens)
        const formatName = file.name.toLowerCase().replace(/\s+/g, '-');

        // Write the file to the public directory (served as static assets)
        const path = join(process.cwd(), 'public', 'uploads', formatName);
        await writeFile(path, buffer);

        // Return relative public path mapping for frontend UI references
        return NextResponse.json({ success: true, url: `/uploads/${formatName}` });

    } catch (e) {
        console.error(e);
        return NextResponse.json({ success: false, error: 'Upload failed' }, { status: 500 });
    }
}

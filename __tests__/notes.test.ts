//import request from 'supertest';
//import { NextRequest } from 'next/server';
import { POST, GET } from '../app/api/notes/route';

describe('API /api/notes', () => {
  it('should return array of notes (GET)', async () => {
    const res = await GET();
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(Array.isArray(json)).toBe(true);
  });

  it('should create a note (POST)', async () => {
    const mockRequest = {
      json: async () => ({
        title: 'Test Note',
        content: 'This is a test',
      }),
    } as unknown as Request;

    const res = await POST(mockRequest);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.title).toBe('Test Note');
  });
});

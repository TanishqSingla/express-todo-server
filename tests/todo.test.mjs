import request from 'supertest';
import { expect, it, describe, beforeAll } from 'vitest';
import { db, initTable } from '../models/db';

const app = require('../app');

describe('Todo', function () {
	beforeAll(() => {
		initTable(db, 'todo')
	})
	describe('PUT /todo', function() {
		it('should create the todo', async function() {
			const res = await request(app).put('/todo').send({content: 'test'})

			expect(res.status).toBe(201);
		});
	});
});

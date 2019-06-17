const request = require('supertest');
const { app } = require('../../index');

describe('tests for conferences endpoint', () => {
  let docID = '';

  it('gets all conferences', async () => {
    const response = await request(app)
      .get('/conferences');

    expect(response.statusCode).toBe(200);
    const conferences = response.body.data;
    expect(conferences[0]).toHaveProperty('id');
    expect(conferences[0]).toHaveProperty('eventWebsite');
    expect(conferences[0]).toHaveProperty('eventName');
    expect(conferences[0]).toHaveProperty('createdAt');
    expect(conferences[0]).toHaveProperty('location');
    expect(conferences[0]).toHaveProperty('compensation');
    expect(conferences[0]).toHaveProperty('contactEmail');
    expect(conferences[0]).toHaveProperty('scholarships');
    expect(conferences[0]).toHaveProperty('eventDate');
    expect(conferences[0]).toHaveProperty('contactName');
    expect(conferences[0]).toHaveProperty('submissionWebsite');
    expect(conferences[0]).toHaveProperty('submissionDate');
    expect(conferences[0]).toHaveProperty('coc');
  });

  it('adds a conference', async () => {
    const conferenceData = {
      eventWebsite: 'testevent.com',
      eventName: 'BACKEND TEST',
      createdAt: 1559826855,
      location: 'Toronto, ON, Canada',
      compensation: 'yes',
      contactEmail: 'test@email.com',
      scholarships: 'yes',
      eventDate: 1560431520,
      contactName: 'My Name',
      submissionWebsite: 'testevent.com',
      submissionDate: 1560258720,
      coc: 'yes'
    };

    const response = await request(app)
      .post('/conferences')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(conferenceData);

    expect(response.statusCode).toBe(201);
    const conference = response.body;
    expect(conference).toHaveProperty('id');
    expect(conference).toHaveProperty('eventWebsite');
    expect(conference).toHaveProperty('eventName');
    expect(conference).toHaveProperty('createdAt');
    expect(conference).toHaveProperty('location');
    expect(conference).toHaveProperty('compensation');
    expect(conference).toHaveProperty('contactEmail');
    expect(conference).toHaveProperty('scholarships');
    expect(conference).toHaveProperty('eventDate');
    expect(conference).toHaveProperty('contactName');
    expect(conference).toHaveProperty('submissionWebsite');
    expect(conference).toHaveProperty('submissionDate');
    expect(conference).toHaveProperty('coc');
    docID = response.body.id;
  });

  it('gets conference details', async () => {
    const documentId = docID;

    const response = await request(app)
      .get(`/conferences/${documentId}`);

    expect(response.statusCode).toBe(200);
    const conference = response.body;
    expect(conference).toHaveProperty('id');
    expect(conference).toHaveProperty('eventWebsite');
    expect(conference).toHaveProperty('eventName');
    expect(conference).toHaveProperty('createdAt');
    expect(conference).toHaveProperty('location');
    expect(conference).toHaveProperty('compensation');
    expect(conference).toHaveProperty('contactEmail');
    expect(conference).toHaveProperty('scholarships');
    expect(conference).toHaveProperty('eventDate');
    expect(conference).toHaveProperty('contactName');
    expect(conference).toHaveProperty('submissionWebsite');
    expect(conference).toHaveProperty('submissionDate');
    expect(conference).toHaveProperty('coc');
    expect(conference.id).toEqual(documentId);
  });

  it('deletes conference', async () => {
    const documentId = { id: docID };

    const response = await request(app)
      .delete(`/conferences`)
      .set('Content-Type', 'application/json')
      .send(documentId);

    expect(response.statusCode).toBe(200);
  });
});

import express from 'express';

const router = express.Router();

router.get('/recover-password', (req, res) => {
  res.status(200).json({ success: false, err: 'Not implemented yet' });
});

export default router;

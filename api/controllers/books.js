const Book = require('../models/book');

exports.index = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  try {
    const { title, author } = req.body;

    const bk = await Book.create({
      author,
      title
    });

    res.status(200).json({ message: "Book was created successfully", book: bk });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const {_id, title, author } = req.body;
    const bk = await Book.findOneAndUpdate({ _id }, {
      title,
      author,
    });
    res.status(200).json({message: 'Book was updated successfully', status: 'success', book: bk});
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Book.findOneAndDelete({ _id: _id });

    res.status(200).json({ message: "Book was deleted successfully" });
  } catch (error) {
    next(error);
  }
};
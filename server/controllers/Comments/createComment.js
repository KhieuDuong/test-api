const { user } = require('../../database/schema');
const { blogs } = require('../../database/schema');
const { v4: uuidv4 } = require('uuid');

const createComment = async (req, res) => {
    try {
        // Kiểm tra xem người dùng đã đăng nhập chưa
        //if (req.session.username) {
        if(true){
            // Tạo một ID mới cho comment
            const commentId = uuidv4();

            // Thêm comment mới với ID vào cơ sở dữ liệu
            await blogs.updateOne({ _id: req.params.id }, {
                $push: {
                    comments: {
                        _id: commentId, // Thêm ID mới vào comment
                        account: req.session.username,
                        comment: req.body.comment
                    }
                }
            });

            res.json({ msg: 'saved' });
        } else {
            res.json({ msg: 'user unauthorised' });
        }
    } catch (error) {
        // Xử lý lỗi
        console.error('Error creating comment:', error);
        res.status(500).json({ msg: 'internal server error' });
    }
};

module.exports = {
    createComment
};

const { blogs } = require('../../database/schema');

const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { commentId } = req.body;
        const { comment } = req.body;
        const { account } = req.body;

        // Kiểm tra xem người dùng đã đăng nhập hay chưa
        // if (!req.session.username) {
        //     return res.status(401).json({ msg: 'User unauthorised' });
        // }

        // Cập nhật comment
        console.log("id  " + id);
        console.log("commentId  " + commentId);
        console.log("newComment  " + comment);
        console.log("account  " + account);
        await blogs.updateOne(
            { _id: id, 'comments._id': commentId, 'comments.account': account },
            { $set: { 'comments.$.comment': comment } }
        );

        res.json({ msg: 'Comment updated successfully' });
    } catch (error) {
        console.error('Error updating comment:', error);
        res.status(500).json({ msg: 'Server error' });
    }
};

module.exports = {
    updateComment
};

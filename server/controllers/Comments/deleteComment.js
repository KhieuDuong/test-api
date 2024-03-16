const { blogs } = require('../../database/schema');

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { commentId } = req.body;

        console.log("id  " + id);
        console.log("commentId  " + commentId);

        // Thực hiện việc xóa comment
        await blogs.updateOne({ _id: id }, { $pull: { comments: { _id: commentId } } });

        res.json({ msg: 'Comment deleted successfully' });
    } catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    deleteComment
};

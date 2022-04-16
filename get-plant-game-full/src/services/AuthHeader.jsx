
export default function AuthHeader() {

    const admin = JSON.parse(localStorage.getItem("admin"));
    if (admin && admin.eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbl9pZCI6MX0.woTwP0HlFh31lokNXm5LfveU0kwt2mvhdyd2pxCEKis) {
        return { Authorization: 'Bearer' + "eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbl9pZCI6MX0.woTwP0HlFh31lokNXm5LfveU0kwt2mvhdyd2pxCEKis" };
    }else {
        return {};
    }
}
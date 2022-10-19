module.exports = jobDRY = (parent, res) => {
    parent
        .then(data => res.send({ data }))
        .catch(err => res.send({ err }))
}
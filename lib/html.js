module.exports = ({
  bundle
}) => {
  return (`<!DOCTYPE html>
<title>live-md</title>
<div id=app></div>
<script>${bundle}</script>`)
}

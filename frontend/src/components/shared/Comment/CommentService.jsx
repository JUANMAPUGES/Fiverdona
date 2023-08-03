import PropTypes from 'prop-types';

const CommentService = ({ comment }) => {
  const fileDownload1 = async () => {
    const fileUrl = `http://localhost:8080/${comment.fileName}`;

    //obtenemos el archivo con fetch
    const res = await fetch(fileUrl);
    const blob = await res.blob();

    //creamos un objeto URL para el blob
    const url = window.URL.createObjectURL(blob);

    //creamos un enlace temporal
    const link = document.createElement('a');
    link.href = url;

    // asignamos un nombre al enlace de descarga anterior
    link.download = comment.fileName;

    //simulamos un click en el enlace para iniciar la descarga
    document.body.append(link);
    link.click();

    //eliminamos el enlace temporal
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <header>
        <p>@{comment.userId}</p>
        <time>
          {new Date(comment.createdAt).toLocaleDateString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
          })}
        </time>
      </header>

      <p>{comment.text}</p>
      {comment.fileName && (
        <button onClick={fileDownload1}>Descargar archivo</button>
      )}
    </div>
  );
};

CommentService.propTypes = {
  comment: PropTypes.object,
};

export default CommentService;

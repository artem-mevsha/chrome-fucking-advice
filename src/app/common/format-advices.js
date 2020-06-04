/**
 * Formats advices array by transforming each advice 'tags' property
 * from String to Object with all required data
 * @param {Array} advices - all advices
 * @param {Array} allTags - all tags with properties 'alias', 'id', 'name'
 * @returns {Array} advices formatted
 */
function formatAdvices(advices, allTags) {
  if (advices && advices.length) {
    if (allTags && allTags.length) {
      advices.forEach((advice) => {
        if (advice.tags && advice.tags.length) {
          // tranfrorm tags of every advice from
          // String with alias only to Object with all data
          // eslint-disable-next-line no-param-reassign
          advice.tags = advice.tags
            .map((adviceTag) => {
              const foundTag = allTags.find((tag) => tag.alias === adviceTag);

              if (foundTag) {
                return {
                  alias: foundTag.alias,
                  name: foundTag.name,
                };
              }
              return undefined;
            })
            .filter((adviceTag) => typeof adviceTag !== 'undefined'); // remove not found tags
        }
      });
      return advices;
    }
  }
  return [];
}

export default formatAdvices;
